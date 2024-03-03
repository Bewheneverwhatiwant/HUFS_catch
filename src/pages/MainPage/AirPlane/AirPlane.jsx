import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';

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
  padding: 0.3rem;
  background-color: green;
  border: none;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Component() {
    const navigate = useNavigate();

    const Start = () => {
        navigate('/');
    }

    const HufsDorm = () => {
        navigate('/hufsdorm');
    }

    const HundredYear = () => {
        navigate('/hundredyear');
    }

    const Library = () => {
        navigate('/library');
    }

    const Engineering = () => {
        navigate('/engineering');
    }

    const StudentCenter = () => {
        navigate('/studentcenter');
    }

    const MyungSoo = () => {
        navigate('/myungsoo');
    }

    const CulturalCenter = () => {
        navigate('/culturalcenter');
    }

    const Economy = () => {
        navigate('/economy');
    }

    const Language = () => {
        navigate('language');
    }

    const Welfare = () => {
        navigate('/welfare');
    }

    const NaturalScience = () => {
        navigate('/naturalscience');
    }

    return (
        <ContainerCenter>
            <PageContainer>

                <CustomRow width='100%' gap='2rem' justifyContent='center' alignItems='center'>
                    <CustomColumn width='50%' gap='2rem' justifyContent='center' alignItems='center'>

                        <GoAirPlane onClick={Economy}>
                            <CustomFont color='white' font='0.7rem'>인문경상관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={CulturalCenter}>
                            <CustomFont color='white' font='0.7rem'>교양관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={MyungSoo}>
                            <CustomFont color='white' font='0.7rem'>명수당</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={Welfare}>
                            <CustomFont color='white' font='0.7rem'>후생관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={Engineering}>
                            <CustomFont color='white' font='0.7rem'>공학관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={NaturalScience}>
                            <CustomFont color='white' font='0.7rem'>자연과학관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={HundredYear}>
                            <CustomFont color='white' font='0.7rem'>백년관</CustomFont>
                        </GoAirPlane>

                    </CustomColumn>

                    <CustomColumn width='50%' gap='2rem' justifyContent='center' alignItems='center'>

                        <GoAirPlane onClick={Language}>
                            <CustomFont color='white' font='0.7rem'>어문학관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={StudentCenter}>
                            <CustomFont color='white' font='0.7rem'>학생회관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={Library}>
                            <CustomFont color='white' font='0.7rem'>도서관</CustomFont>
                        </GoAirPlane>

                        <GoAirPlane onClick={HufsDorm}>
                            <CustomFont color='white' font='0.7rem'>기숙사</CustomFont>
                        </GoAirPlane>

                    </CustomColumn>

                </CustomRow>

            </PageContainer>
        </ContainerCenter>
    );
};