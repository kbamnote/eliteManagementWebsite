import React from 'react';
import styled from 'styled-components';
import { Star, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <StyledWrapper>
      <Link to={`/course/${course.id}`}>
        <div className="card">
          <div className="bg" />
          <div className="content">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-700"></div>
                </div>
                <div className="flex items-center bg-yellow-500/10 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium ml-1">{course.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>
              
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Users className="w-4 h-4 mr-2" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>{course.duration} • {course.level}</span>
              </div>
              
              <div className="mt-auto flex justify-between items-center">
                <div className="text-lg font-semibold text-purple-700">${course.price}</div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 text-sm">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 320px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default CourseCard;