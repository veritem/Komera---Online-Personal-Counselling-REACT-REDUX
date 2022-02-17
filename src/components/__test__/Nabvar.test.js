import { render, screen } from "@testing-library/react"
import Nav from "../Navbar"
import {BrowserRouter as Router} from "react-router-dom"


describe("Test navbar", () => {
    it("It should render navbar", () => {
        render(
        <Router>
            <Nav/>
        </Router> , () => {
            const nav=  screen.getByTestId("nav")

            expect(nav).toBe(true)
        })
    })
})