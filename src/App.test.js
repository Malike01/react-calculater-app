import { render, screen } from '@testing-library/react';
import App from './App';

describe("Calculator Test",()=>{
  let button1, button2, input;

  beforeEach(() =>{
      render(<Tt1Keyboard/>);

      button1 = screen.getByText("tt1");
      button2 = screen.getByText("tt2");
      input =  expect(screen.getByTestId('add-input'))
  });

  test("input and button render", () => {
    expect(button1).toBeInTheDocument;
    expect(button2).toBeInTheDocument;
    expect(input).toBeInTheDocument;

});
})