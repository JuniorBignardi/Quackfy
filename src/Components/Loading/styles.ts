import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 165px;
    gap: 150px;
    
.zoom-in-out-box {
  width: 150px;
  animation: zoom-in-zoom-out 0.5s ease infinite;

  @keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}

}


.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid var(--yellow);
  border-radius: 50%;
  animation: lds-ring 0.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--yellow) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.15s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.1s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.05s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



`;