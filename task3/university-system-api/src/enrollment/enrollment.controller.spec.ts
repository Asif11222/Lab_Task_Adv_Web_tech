import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';

describe('EnrollmentController', () => {
  let controller: EnrollmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollmentController],
      providers: [
        EnrollmentService,
        CourseService,
        {
          provide: NotificationService,
          useValue: { sendNotification: () => ({}) },
        },
      ],
    }).compile();

    controller = module.get<EnrollmentController>(EnrollmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
