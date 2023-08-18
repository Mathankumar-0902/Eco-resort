import React from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      {myUser ? (
        <button
          className='auth-btn'
          type='button'
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className='auth-btn' type='button' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 110px;

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
