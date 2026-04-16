import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private readonly enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return { message: 'Notification sent', data: { studentName, message } };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    // For this exercise: verify enrollment access by calling into EnrollmentService
    return this.enrollmentService.getEnrollments();
  }
}
