import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Productlist.css";
import axios from "axios";
import { Link } from "react-router-dom";


function Productlist() {
  const [sdata, setData] = useState("");

  const [foods, setFoods] = useState([]);

  const [copyFoods, setCopyFoods] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/recipes");
    setFoods(result.data.recipes);
    setCopyFoods(result.data.recipes);
  };

  useEffect(() => {
    fetchData();
  }, [sdata]);
console.log(foods);
  const search = () => {
    const data = foods.filter((i) =>
      (i.name + i.tags)
        .toLowerCase()
        .trim()
        .includes(sdata.toLowerCase().trim())
    );
    setCopyFoods(data);
  };

  const getSortedMeal = (foodName) => {
    const result = foods.filter((i) =>
      i.mealType
        .join()
        .toLowerCase()
        .trim()
        .includes(foodName.toLowerCase().trim())
    );
    setCopyFoods(result);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <h1 id="p1">
              Our Top <br /> Selling <br /> Packages
            </h1>
            <p id="p2">
              See what the Lagos Jaiye Community <br />
              loved most this week, join <br /> our never ending owambé - ORDER
              NOW!
            </p>
          </Col >
          <Col lg={6}>
            <img className="w-100"
              src="https://i.postimg.cc/651RfDgF/bowl-removebg-preview.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="buttons-div mb-5 row-gap-4">
          <Col lg={6} className="ps-md-5">
            <div className="d-flex">
              <input
                onChange={(e) => setData(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="SearchFood"
                className="form-control"
              />
              <button onClick={search} className="btn btn-dark ms-3">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <div className="d-flex flex-wrap gap-2">
            <button
                id="d3"
                onClick={() => getSortedMeal("")}
                className="btn-success btn"
              >
                All
              </button>
              <button
                id="d3"
                onClick={() => getSortedMeal("Breakfast")}
                className="btn-success btn"
              >
                Breakfast
              </button>
              <button
                id="d4"
                onClick={() => getSortedMeal("Lunch")}
                className="btn-success btn"
              >
                Lunch
              </button>
              <button
                 id="d5"
                onClick={() => getSortedMeal("Dinner")}
                className="btn-success btn"
              >
                Dinner
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {foods.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly container mb-5   ">
          {copyFoods.map((i) => (
          <Link to={`/singleview/${i.id}`} style={{textDecoration:'none'}}>
              <Card
                style={{ width: "18rem", height: "100%",  padding:'5px' }}
                className=" border-0 "
              >
                <Card.Img id="e1" variant="top" src={i.image} className="card-img" />
                <Card.Body className="text-center">
                  <Card.Title>{i.name}</Card.Title>
                  <div className="d-flex justify-content-between mt-4">
                    <b>{i.cuisine}</b>
                    <span>{i.mealType.join()}</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <span>
                        Rating{" "}
                        <span
                          className={
                            i.rating > 4.5 ? "text-success" : "text-warning"
                          }
                          style={{ fontWeight: "700" }}
                        >
                          {i.rating}
                        </span>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFD43B" }}
                        ></i>{" "}
                      </span>
                      <span>({i.reviewCount})</span>
                    </div>
                    <div>
                      <span>
                        <span
                          className={
                            i.difficulty === "Easy"
                              ? "text-success"
                              : "text-warning"
                          }
                          style={{ fontWeight: "600" }}
                        >
                          {i.difficulty}
                        </span>
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              </Link>
          ))}
        </div>
      ) : (
        <div className='text-center  p-5 m-5'>
        <i class="fa-solid fa-burger fa-bounce fa-4x"></i>
         </div>
      )}
    </div>
  );
}

export default Productlist;
