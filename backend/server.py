from flask import Flask
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


class StudentList(Resource):
    def get(self):
        return data if data else 404


api.add_resource(StudentList, '/students/')
api.add_resource(Students, '/students/<int:student_id>')

if __name__ == '__main__':
    app.run(debug=True)
