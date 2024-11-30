'use client'; // Ensures client-side rendering

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Background, Opacity } from 'tsparticles-engine';

interface Submission {
    date: string;
    count: number;
}

interface HeatMapProps {
    codechefId: string;
    codeforcesId: string;
    leetcodeId: string;
}

const HeatMap: React.FC<HeatMapProps> = ({ codechefId, codeforcesId, leetcodeId }) => {
    const [heatmapData, setHeatmapData] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);

    const host = process.env.NEXT_PUBLIC_HOST || '';
    console.log(host);

    useEffect(() => {
        const fetchHeatmapData = async () => {
            try {
                const response = await fetch(
                    `${host}/api/heatmap/getHeatmapData?codechefid=${codechefId}&codeforcesid=${codeforcesId}&leetcodeid=${leetcodeId}`
                );
                const data = await response.json();
                const combinedData = processCombinedData(data);
                setHeatmapData(combinedData);
            } catch (error) {
                console.error('Error fetching heatmap data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeatmapData();
    }, [codechefId, codeforcesId, leetcodeId]);

    const processCombinedData = (data: any): Submission[] => {
        const combinedHeatmap: { [date: string]: number } = {};

        const leetcodeData = JSON.parse(data.leetcode.submissionCalendar);
        for (const timestamp in leetcodeData) {
            const date = format(new Date(Number(timestamp) * 1000), 'yyyy-MM-dd');
            combinedHeatmap[date] = (combinedHeatmap[date] || 0) + leetcodeData[timestamp];
        }

        data.codeforces.result.forEach((submission: any) => {
            const date = format(new Date(submission.creationTimeSeconds * 1000), 'yyyy-MM-dd');
            combinedHeatmap[date] = (combinedHeatmap[date] || 0) + 1;
        });

        data.codechef.heatMap.forEach((submission: any) => {
            const date = submission.date;
            combinedHeatmap[date] = (combinedHeatmap[date] || 0) + submission.value;
        });

        return Object.entries(combinedHeatmap).map(([date, count]) => ({ date, count }));
    };

    const startDate = new Date(new Date().getFullYear(), 0, 1);
    const endDate = new Date();

    return (
        <div className="w-full flex flex-col my-2 p-2 border rounded-xl shadow-lg bg-transparent">
            <h2 className="text-center text-white">Combined Submissions</h2>
            <h2 className="text-center pb-3 text-white">(from LeetCode, CodeForces, CodeChef)</h2>
            {loading ? (
                <div className="animate-pulse">
                    <div className="w-full h-[200px] shimmer-effect"></div>
                </div>
            ) : (
                <div className='opacity-85'>
                    <CalendarHeatmap
                      gutterSize={4}
                        startDate={startDate}
                        endDate={endDate}
                        values={heatmapData}
                        showWeekdayLabels={true}

                        weekdayLabels={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                        classForValue={(value) => {
                            console.log(value); // Debugging to verify the value
                            if (!value || value.count === 0) return 'color-empty'; // Assign CSS class for empty cells
                            if (value.count >= 1 && value.count <= 2) return 'color-scale-1';
                            if (value.count >= 3 && value.count <= 5) return 'color-scale-2';
                            if (value.count >= 6 && value.count <= 9) return 'color-scale-3';
                            return 'color-scale-4';
                        }}
                        titleForValue={(value) =>
                            value && value.count
                                ? `${format(new Date(value.date), 'd MMMM')}: ${value.count} submissions`
                                : 'No submissions'
                        }
                        showMonthLabels={true}
                        transformDayElement={(element, value) => {
                            // Fallback to black for cells with no data
                            const style = {
                                fill: (!value || value.count === 0) ? '#16191C' : undefined,
                                // set  backdrop-blur-lg
                                backdropFilter: (!value || value.count === 0) ? 'blur(20px)' : undefined,
                                borderRadius: '10px',
                                
                                
                            };
                            return React.cloneElement(element as React.ReactElement,  { style });
                        }}
                    />
                    <ReactTooltip />
                </div>
            )}
        </div>
    );
};

export default HeatMap;
