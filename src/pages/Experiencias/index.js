import React from "react";
import "./style.css"
import Titulo from "../../components/Titulo";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import Typography from '@mui/material/Typography';

export default function Experiencias() {
    return (
        <div id="experiencias" className="experiencia-container">
            <Titulo nome={"EXPERIÊNCIAS"} />
            <div className="experiencia-conteudo">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ 
                                m: 'auto 0', 
                                fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" }
                            }}
                            align="right"
                            color="white"
                        >
                            2021 - 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '25px', px: 2 }}>
                            <Typography 
                                variant="h6" 
                                component="span" 
                                sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
                            >
                                Ciências da Computação
                            </Typography>
                            <Typography 
                                sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" } }}
                            >
                                IFTO - Instituto Federal do Tocantins Campus Colinas
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ 
                                m: 'auto 0', 
                                fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" }
                            }}
                            color="white"
                        >
                            2022 - 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <WorkIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '25px', px: 2 }}>
                            <Typography 
                                variant="h6" 
                                component="span" 
                                sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
                            >
                                Estágio em Tecnologia da Informação - TI
                            </Typography>
                            <Typography 
                                sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" } }}
                            >
                                Prefeitura Municipal de Guarai
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ 
                                m: 'auto 0', 
                                fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" }
                            }}
                            color="white"
                        >
                            2024 - Presente
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <WorkIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '25px', px: 2 }}>
                            <Typography 
                                variant="h6" 
                                component="span" 
                                sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
                            >
                                Técnico em Informática - TI
                            </Typography>
                            <Typography 
                                sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" } }}
                            >
                                Prefeitura Municipal de Guarai
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}
