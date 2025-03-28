FROM node:18-alpine


# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000  
CMD ["npm", "start"]  
