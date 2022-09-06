import React from "react";
import { Button, Card, Container, Content } from "../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const courses = [
  {
    title: "آموزشی",
    description:
      "لورم ایپسوم متن ساختگی ورم ایپسوم متن ساختگی ورم ایپسوم متن ساختگی",
    type: "تمرین",
    time: 32,
    score: 45,
    correct: 3,
    failed: 2,
    empty: 0,
    done: false,
  },
  {
    title: "تثبیت",
    description:
      "لورم ایپسوم متن ساختگی ورم ایپسوم متن ساختگی ورم ایپسوم متن ساختگی",
    type: "تمرین",
    time: 32,
    score: 45,
    correct: 3,
    failed: 2,
    empty: 0,
    done: true,
  },
];

const Courses = () => {
  return (
    <Container>
      <div className="courses">
        <div className="list">
          {courses.map((course, index) => (
            <div className="course__item" key={index}>
              <div className="course__timeline">
                <div style={{ width: 73 }}>
                  <CircularProgressbar value={60} text={<tspan>IMG</tspan>} />
                </div>
                <div className="course__process-questions">20 سوال</div>
              </div>

              <Card>
                <div className="course__detail">
                  <div>
                    <div>
                      {course.title} <span>({course.type})</span>
                    </div>
                    <div className="course__description">
                      {course.description}
                    </div>
                  </div>
                </div>

                <div>
                  <Content>
                    <div className="course__score">
                      <div className="flex a-c j-sb">
                        <div className="course__bullet" />
                        <div>درست</div>
                      </div>

                      <div>{course.correct}</div>
                    </div>
                  </Content>
                </div>

                <div className="course__button">
                  <Button
                    title={course.done ? "شروع مجدد" : "ادامه بده"}
                    color={course.done ? "primary" : "light"}
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Courses;
