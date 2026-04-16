import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

type UploadedCourseFile = {
    originalname: string;
    path: string;
};

@Injectable()
export class CourseService {
    getAllCourses() {
        return {
            message: "This is a list of all courses.",
            data: [],
        }
    }
   
    getCourseById(id: string) {
       return {
            message: "Course fetched successfully.",
            id,
        }
    }
    createCourse(dto: CreateCourseDto) {
        return {
            message: "Course created successfully.",
            data: dto,

        }
    }
   updateCourse(id: string, dto: UpdateCourseDto) {
        return {
            message: "Course updated successfully.",
            id,
            data: dto,
        };
    }
    patchCourse(id: string, dto: UpdateCourseDto) {
        return {
            message:"Course patched successfully.",
            id,
            updatedFields: Object.keys(dto),
        };
    }
    deleteCourse(id: string) {
        return {
            message: "Course deleted successfully.",
            id,
        }
    }
    
    uploadCourseMaterial(id: string, file: UploadedCourseFile) {
        return {
            message: "Course material uploaded successfully.",
            id,
            filename: file.originalname,
            path: file.path,
        }
    }
}
 