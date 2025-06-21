# Base image with Bun
FROM oven/bun:1.1.13

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN bun install

# Expose port (ganti sesuai vite.config.ts)
EXPOSE 3000

# Jalankan server
CMD ["bun", "run", "dev", "--host"]
