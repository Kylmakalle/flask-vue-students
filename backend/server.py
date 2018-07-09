from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
import ujson

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/students/*": {"origins": "*"}})

with open('DATA.json', 'r') as datafile:
    data = ujson.load(datafile)


class Students(Resource):
    def get(self, student_id):
        if student_id is not None:
            student_data = next((student for student in data if student['id'] == student_id),
                                None)
            if student_data:
                return student_data
            else:
                return 404
        return data

    def put(self, student_id):
        editable_student = request.get_json()['data']
        for student in range(len(data)):
            if data[student]['id'] == student_id:
                data[student] = editable_student
            return 201

    def delete(self, student_id):
        if student_id is not None:
            student_data = next((student for student in data if student['id'] == student_id),
                                None)
            if student_data:
                try:
                    data.remove(student_data)
                except Exception as e:
                    # Log error
                    return 500
                return 200
            else:
                return 404


class StudentList(Resource):
    def get(self):
        return data if data else 404

    def post(self):
        student = request.get_json()['data']
        student['id'] = get_free_id()
        data.append(student)
        print('ADDED!')
        return 201


def get_free_id(candidate=None):
    if candidate is not None:
        new_id = candidate + 1
    else:
        new_id = len(data) + 1
    student_data = next((student for student in data if student['id'] == new_id),
                        None)
    if student_data is not None:
        return get_free_id(new_id)
    else:
        return new_id


api.add_resource(StudentList, '/students/')
api.add_resource(Students, '/students/<int:student_id>')

if __name__ == '__main__':
    app.run(debug=True)
