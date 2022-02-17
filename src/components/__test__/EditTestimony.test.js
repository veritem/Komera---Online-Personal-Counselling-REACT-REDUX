import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import EditTestimonial  from "../EditTestimonial";
import testimonialsStore from "../../store/testimonialStore";
import { BrowserRouter as Router } from "react-router-dom";
import {screen} from "@testing-library/react"

describe("EditTestimony", () => {
  test("should update a testimony", () => {
    render(
      <Provider store={testimonialsStore}>
        <Router>
          <EditTestimonial />
        </Router>
      </Provider>, () => {
        const element = screen.getAllByTestId("card")

        expect(element).toBe(true)

      }
    );
  });
});
