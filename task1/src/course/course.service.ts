import { Injectable } from '@nestjs/common';
 
@Injectable()
export class CourseService {
    getAllCourses() {
        return "This is a list of all courses.";
    }
   
    getCourseById(id: string) {
        return `This is the course with ID: ${id}`;
    }
    createCourse() {
        return "Course created successfully.";
    }
    updateCourse(id: string) {
        return `Course with ID: ${id} updated successfully.`;
    }
    patchCourse(id: string) {
        return `Course with ID: ${id} patched successfully.`;
    }
    deleteCourse(id: string) {
        return `Course with ID: ${id} deleted successfully.`;
    }
}
 