import Vue from 'vue'
import VueRouter from 'vue-router'

// Layout import
import LandingLayout from './layout/LandingLayout'
import DashboardView from './layout/DashboardView'

// Pages import
import Home from './pages/Home'

//Admin features
import Lecturer from './pages/admin/Lecturer'
import Student from './pages/admin/Student'
import Todo from './pages/admin/Todo'
import Timetable from './pages/admin/Timetable'
import Department from './pages/admin/Department';
import Course from './pages/admin/Course';

// Student features
import StuTodo from './pages/student/Todo'
import StuTimetable from './pages/student/Timetable'

// Lecturer features
import LecTodo from './pages/lecturer/Todo'
import LecTimetable from './pages/lecturer/Timetable'

Vue.use(VueRouter) 


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LandingLayout,
            children: [
                {
                    path: '/home',
                    component: Home,
                    name: 'Home',
                },
            ],
        },
        {
            path: "/admin",
            component: DashboardView,
            children: [
                {
                    path: 'department',
                    name: 'Department',
                    component: Department,
                },
                {
                    path: 'lecturer',
                    name: 'Lecturer',
                    component: Lecturer
                },
                {
                    path: 'student',
                    name: 'Student',
                    component: Student
                },
                {
                    path: 'course',
                    name: 'Course',
                    component: Course
                },
                {
                    path: 'todo',
                    name: 'Todo',
                    component: Todo
                },
                {
                    path: 'timetable',
                    name: 'Timetable',
                    component: Timetable
                },
            ]
        },
        {
            path: "/student",
            component: DashboardView,
            children: [
                {
                    path: 'todo',
                    name: 'Todo',
                    component: StuTodo
                },
                {
                    path: 'timetable',
                    name: 'Timetable',
                    component: StuTimetable
                },
            ]
        },
        {
            path: "/lecturer",
            component: DashboardView,
            children: [
                {
                    path: 'todo',
                    name: 'Todo',
                    component: LecTodo
                },
                {
                    path: 'timetable',
                    name: 'Timetable',
                    component: LecTimetable
                },
            ]
        }
    ]
})