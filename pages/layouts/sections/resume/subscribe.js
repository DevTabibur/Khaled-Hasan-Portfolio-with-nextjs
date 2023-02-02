import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className="resume subscribe" id="contact">
        <Container>
          <Row>
            <Col lg="8" className="offset-lg-2">
              <div className="title title2">
                <h3 className="subscribe-head">
                  Need A Experienced Team For Your Project?
                </h3>
                <p className="subscribe-sub-head font-primary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
            <Col xl="6" lg="8" className="offset-xl-3 offset-lg-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9 ]*$/,
                        message: "Name should be unique",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* email */}
                <div className="form-group mb-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* number */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    placeholder="Your Number"
                    className="input input-bordered "
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Number is Required",
                      }
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.number?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.number.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* details */}
                <div className="form-group mb-2">
                  <textarea
                    type="text"
                    placeholder="Project Details"
                    className="textarea textarea-bordered "
                    {...register("projectDetails", {
                      required: {
                        value: true,
                        message: "Project Details is Required",
                      }
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.projectDetails?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.projectDetails.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-group">
                  <input
                    className="btn  primary-btn"
                    type="submit"
                    value="SEND EMAIL"
                  ></input>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Subscribe;
