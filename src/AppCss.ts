import { styled } from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;

  .bgImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .contentView {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
    overflow-y: scroll;
    z-index: 9;

    &::-webkit-scrollbar {
      width: 8px;
      height: 10px;
      /**/
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(
        45deg,
        rgb(112, 192, 232) 0%,
        rgb(112, 192, 232) 25%,
        rgb(182, 222, 242) 25%,
        rgb(182, 222, 242) 50%,
        rgb(112, 192, 232) 50%,
        rgb(112, 192, 232) 75%,
        rgb(182, 222, 242) 75%,
        rgb(182, 222, 242) 100%
      );
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-image: linear-gradient(
        45deg,
        rgba(232, 128, 128) 0%,
        rgba(232, 128, 128) 25%,
        rgb(182, 222, 242) 25%,
        rgb(182, 222, 242) 50%,
        rgba(232, 128, 128) 50%,
        rgba(232, 128, 128) 75%,
        rgb(182, 222, 242) 75%,
        rgb(182, 222, 242) 100%
      );
    }
  }

  .bgImg-enter {
    opacity: 0;
  }

  .bgImg-enter-active {
    opacity: 1;
    transition: all 6s;
  }

  .bgImg-exit {
    opacity: 1;
  }

  .bgImg-exit-active {
    opacity: 0;
    transition: all 6s;
  }
`;
