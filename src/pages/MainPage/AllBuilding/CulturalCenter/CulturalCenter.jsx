import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 20px;
  position: relative;
  background-color: #353535;
`;


const GoAirPlane = styled.div`
  width: 4rem;
  height: 2vh;
  padding: 1rem;
  background-color: green;
  border: none;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Component() {
    const navigate = useNavigate();

    const one = () => {
        navigate('/culturalcenterone');
    }

    const two = () => {
        navigate('/culturalcentertwo');
    }

    const three = () => {
        navigate('/culturalcenterthree');
    }

    const four = () => {
        navigate('/culturalcenterfour');
    }

    const five = () => {
        navigate('/culturalcenterfive');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <GoAirPlane onClick={one}>1층</GoAirPlane>
                <GoAirPlane onClick={two}>2층</GoAirPlane>
                <GoAirPlane onClick={three}>3층</GoAirPlane>
                <GoAirPlane onClick={four}>4층</GoAirPlane>
                <GoAirPlane onClick={five}>5층</GoAirPlane>
            </PageContainer>
        </ContainerCenter>
    );
};