import { css } from "lit-element";

export default css`
  :host {
    display: block;
  }

  .container {
    text-align: justify;
  }

  get-data {
    display: none;
  }

  .card {
    background: #fff;
    border-radius: 10px;
    display: inline-block;
    height: 300px;
    width: 200px;
    margin: 2em;
    position: relative;
    text-align: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.24);
  }

  .card img {
    width: 70%;
  }
`;
