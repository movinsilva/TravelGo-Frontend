import { describe, expect, it} from "vitest";
import {render,screen,fireEvent} from '@testing-library/react';
import TestRenderer from "react-test-renderer"; 
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider
import store from "../store.js"; // Import your Redux store
import HeroSection from './../Screens/Home/HeroSection';
import "@testing-library/jest-dom";


describe("Home Page/HeroSection.jsx",()=>{
    it("Input fields takes correct input types",()=>{
        const tree= TestRenderer.create(
        <Provider store={store}>
            <MemoryRouter>
                <HeroSection/>
            </MemoryRouter>
        </Provider>).toJSON();

        expect(tree.children[1].children[1].children[0].children[0].props.className).toBe("dropdown-class")
        expect(tree.children[1].children[1].children[0].children[1].props.className).toBe("dropdown-class")
        expect(tree.children[1].children[1].children[0].children[2].props.className).toBe("dropdown-class")

        expect(tree.children[1].children[1].children[0].children[2].children[1].props.type).toBe("date")
        //console.log(tree.children[1].children[1].children[0].children[2].children[1])



        expect(tree).toMatchSnapshot(); // This can be used for snapshot testing
    })

    it("Web page elements Renders correctly",()=>{
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HeroSection/>
                </MemoryRouter>
            </Provider>
        )
        expect(screen.getByText("Hello Travellers")).toBeInTheDocument();
        expect(screen.getByText("From")).toBeInTheDocument();
        expect(screen.getByText("To")).toBeInTheDocument();
        expect(screen.getByText("Date")).toBeInTheDocument();
        expect(screen.getByText("Search")).toBeInTheDocument();


    })
    

   
})