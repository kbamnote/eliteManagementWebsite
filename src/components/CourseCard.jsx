import React from 'react';
import { Star, Users, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-xl h-full flex flex-col">
      <Link to={`/course/${course.id}`} className="block h-full flex flex-col">
        {/* Course Image Header */}
        <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
          <div className="relative z-10 text-center p-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white truncate px-2">{course.title}</h3>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex items-center bg-yellow-500/10 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold ml-1 text-blue-800">{course.rating}</span>
            </div>
          </div>
          
          <p className="text-blue-600 text-sm mb-3 line-clamp-2">by {course.instructor}</p>
          
          <div className="space-y-2 mb-4 flex-grow">
            <div className="flex items-center text-sm text-blue-600">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            
            <div className="flex items-center text-sm text-blue-600">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span>{course.duration} • {course.level}</span>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-blue-50 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-700">${course.price}</div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Enroll Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;