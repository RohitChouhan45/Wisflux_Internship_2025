import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class FilesService {
  private s3: S3Client;

  constructor(private configService: ConfigService) {
    this.s3 = new S3Client({
      region: this.configService.get('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }

  async uploadFileToS3(file: Express.Multer.File) {
    const bucket = this.configService.get('AWS_S3_BUCKET');
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: bucket,
      Key: `${Date.now()}-${file.originalname}`,
      Body: fileStream,
    };

    const command = new PutObjectCommand(uploadParams);
    await this.s3.send(command);

    return {
      message: 'File uploaded to S3',
      key: uploadParams.Key,
    };
  }

  async generatePresignedUrl(key: string) {
    const command = new PutObjectCommand({
      Bucket: this.configService.get('AWS_S3_BUCKET'),
      Key: key,
    });

    const url = await getSignedUrl(this.s3, command, { expiresIn: 3600 });
    return { url };
  }
}