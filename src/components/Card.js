import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || name}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness></MdBusiness> {company||'google.com'}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {location || 'earth'}
        </p>
        {blog?(
        <a href={`https://${blog}`}> <MdLink></MdLink> {blog}</a>
           )
           :
           (
            <a href={`https://www.github.com`}> <MdLink></MdLink> {'www.github.com'} </a>
          )
        }
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  position: relative;
  &::before {
    content: 'Github User';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      color: var(--clr-grey-5);
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a{
      color: var(--clr-primary-5);
    }
   
  }
`;
export default Card;
