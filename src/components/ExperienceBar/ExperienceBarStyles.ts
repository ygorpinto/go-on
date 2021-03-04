import styled from 'styled-components'

export const ExperienceBarStyles = styled.div`
.experienceBar {
    display: flex;
    align-items: center;
  }
  
  .experienceBar span {
    font-size: 1rem;
  }
  
  .experienceBar > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background:${props=>props.theme.color.grayLine};
    margin: 0 1.5rem;
    position: relative;
  }
  
  .experienceBar > div > div {
    height: 4px;
    border-radius: 4px;
    background: ${props=>props.theme.color.green};
  }
  
  span.currentExperience {
    position: absolute;
    transform: translateX(-50%);
    top: 12px;
  }
`