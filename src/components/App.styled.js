import styled from 'styled-components'

export const ButtonClick = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  margin-right:4px;
  padding:8px;
  color: white;
  background-color: gray;
  cursor: pointer;

  border: 1.5px solid rgb(171, 163, 163);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

    transition: color 250ms linear,background-color 250ms linear, box-shadow 250ms linear ;
    &:hover {
    background-color: white;
    color: black;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    
  }
`
export const EmergenceData = styled.ul`
  display:flex;
  flex-direction:column;
  gap:8px;
  list-style: none;
  font-weight: 500;
`
export const NotificationTitle = styled.h2`
  font-weight: 500;
  color: gray
`