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
import CodeIcon from '@mui/icons-material/Code';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function Experiencias() {

    return(
        <div className="experiencia-container">
            <Titulo nome={"EXPERIÊNCIAS"}/>
            <div className="experiencia-conteudo">

                <div className="experiencia-subtitulo">
                    <p> <WorkIcon className="subtitulo-icone"/> Trabalho </p>
                    <p> Estudo <SchoolIcon className="subtitulo-icone"/> </p>
                </div>

                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="whrite"
                        >
                        2021 - 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <CodeIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Ciências da Computação
                        </Typography>
                        <Typography>IFTO - Instituto Federal do Tocantins Campus Colinas</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="whrite"
                        >
                        2022 - 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <DisplaySettingsIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Estágio em Tecnologia da Informação - TI
                        </Typography>
                        <Typography>Prefeitura Municipal de Guarai</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="whrite"
                        >
                        2024 - Presente
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <DisplaySettingsIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Técnico em Informática - TI
                        </Typography>
                        <Typography>Prefeitura Municipal de Guarai</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    {/* <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <RepeatIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                        </TimelineContent>
                    </TimelineItem> */}
                    </Timeline>
            </div>
        </div>
    )
}