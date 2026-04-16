import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        {
          provide: EnrollmentService,
          useValue: {
            getEnrollments: () => ({ message: 'All enrollments fetched', data: [] }),
          },
        },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
