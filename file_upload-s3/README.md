# NestJS File Upload to AWS S3

This is a sample NestJS project demonstrating how to upload files to **Amazon S3** using the AWS SDK (v3) and `@nestjs/config`.

## 🚀 Features

- File upload via REST endpoint
- AWS S3 integration using `@aws-sdk/client-s3`
- Uses `ConfigService` for environment configuration
- Generates unique file keys for S3
- Secure file handling with potential for pre-signed URLs

## 🧱 Folder Structure

src/
└── files/
├── files.module.ts
├── files.controller.ts
└── files.service.ts
.env

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET=your-bucket-name
PORT=3000
```

📦 Install Dependencies
```npm install```

▶️ Run the Server
```
npm run start
```
📤 API Usage
Endpoint
```
POST /files/upload
```
Body
- FormData:
   - file: The file to upload

Example (Postman)
- Choose POST
- URL: http://localhost:3000/files/upload
- Body → form-data → Key: file, Type: File

🔐 Generating Pre-Signed URLs
Optional method in FilesService for generating upload links:
```generatePresignedUrl('filename.jpg');```

