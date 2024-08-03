from flask_sqlalchemy import SQLAlchemy

db =  SQLAlchemy()

class Department(db.Model):
    __tablename__="departments"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    head_id = db.Column(db.Integer, db.ForeignKey('faculty.id'))

class Faculty(db.Model):
    __tablename__ = "faculties"
    faculty_iD = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(150), nullable=False, index=True)
    last_name = db.Column(db.String(150), nullable=False)
    email =  db.Column(db.String(150), nullable=False, unique=True)
    phone = db.Column(db.String(10), unique=True)
    address = db.column(db.String(200))
    department_id = db.Column(db.Integer, index=True)
    hire_date = db.Column(db.Date, index=True, nullabel=False)

    classrooms = db.relationship('ClassroomMentor', back_populates='mentor')

class Student(db.Model):
    __tablename__ = "students"
    reg_no = db.Column(db.BigInteger, primary_key=True)
    roll_no = db.Column(db.String(20), primary_key=True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(150), index=True, nullable=False)
    last_name = db.Column(db.String(150), nullable=False)
    gender =  db.Column(db.Char(1), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    email =  db.Column(db.String(150), unique=True)
    phone = db.Column(db.String(10), index=True, unique=True)
    address = db.column(db.String(200))
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    batch = db.Column(db.Integer, nullable=False)
    enrollment_date = db.Column(db.Date)
    submissions = db.relationship('Submission', backref='student')

class Course(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    code = db.Column(db.String(10), unique=True, nullable=False)
    credits = db.Column(db.Integer, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))

class Classroom(db.Model):
    __tablename__ = 'classrooms'
    id = db.Column(db.Integer, primary_key=True)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    section = db.Column(db.String(1), nullable=False)
    capacity = db.Column(db.Integer)

    mentors = db.relationship('ClassroomMentor', back_populates='classroom')

class ClassroomMentor(db.Model):
    __tablename__ = 'classroom_mentors'
    classroom_id = db.Column(db.Integer, db.ForeignKey('classrooms.id'), primary_key=True)
    mentor_id = db.Column(db.Integer, db.ForeignKey('mentors.id'), primary_key=True)
    part_of_class = db.Column(db.String(10), nullable=False)

    classroom = db.relationship('Classroom', back_populates='mentors')
    mentor = db.relationship('Mentor', back_populates='classrooms')

class Attendance(db.Model):
    __tablename__ = 'attendance'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_reg_no = db.Column(db.Integer, db.ForeignKey('students.reg_no'))
    date = db.Column(db.Date)
    status = db.Column(db.String(10))

class Assignment(db.Model):
    __tablename__ = 'assignments'
    assignment_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    due_date = db.Column(db.Date)
    course = db.relationship('Course', backref='assignments')

class Submission(db.Model):
    __tablename__ = 'submissions'
    submission_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    assignment_id = db.Column(db.Integer, db.ForeignKey('assignments.assignment_id'))
    student_id = db.Column(db.Integer, db.ForeignKey('students.student_id'))
    submission_date = db.Column(db.Date)
    status = db.Column(db.Enum('submitted', 'pending', 'late'))
    assignment = db.relationship('Assignment', backref='submissions')
    student = db.relationship('Student', backref='submissions')