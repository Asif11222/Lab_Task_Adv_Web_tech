import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';
import { EnrollmentService } from './enrollment.service';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnrollmentService,
        CourseService,
        {
          provide: NotificationService,
          useValue: { sendNotification: () => ({}) },
        },
      ],
    }).compile();

    service = module.get<EnrollmentService>(EnrollmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
