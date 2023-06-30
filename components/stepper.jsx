// import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';

// import StepConnector, {
//     stepConnectorClasses,
// } from '@mui/material/StepConnector';

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//     [`&.${stepConnectorClasses.alternativeLabel}`]: {
//         top: 22,
//     },
//     [`&.${stepConnectorClasses.active}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             backgroundImage:
//                 // 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
//                 // 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(25,130,152,1) 71%)'
//                 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(18,115,235,1) 71%)',
//         },
//     },
//     [`&.${stepConnectorClasses.completed}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             backgroundImage:
//                 // 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(25,130,152,1) 71%)'
//                 // 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
//                 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(18,115,235,1) 71%)',
//         },
//     },
//     [`& .${stepConnectorClasses.line}`]: {
//         height: 3,
//         border: 0,
//         backgroundColor:
//             theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//         borderRadius: 1,
//     },
// }));

// const ColorlibStepIconRoot =
//     styled('div') <
//     {
//         ownerState: { completed: true || false, active: true || false },
//     } >
//     (({ theme, ownerState }) => ({
//         backgroundColor:
//             theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
//         zIndex: 1,
//         color: '#fff',
//         width: 50,
//         height: 50,
//         display: 'flex',
//         borderRadius: '50%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         ...(ownerState.active && {
//             backgroundImage:
//                 // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//                 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(18,115,235,1) 71%)',
//             boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//         }),
//         ...(ownerState.completed && {
//             backgroundImage:
//                 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(18,115,235,1) 71%)',
//         }),
//     }));

// let icons;
// function ColorlibStepIcon(props) {
//     const { active, completed, className, icon } = props;

//     return (
//         <ColorlibStepIconRoot
//             ownerState={{ completed, active }}
//             className={className}
//         >
//             {icons[String(icon)]}
//         </ColorlibStepIconRoot>
//     );
// }

// export default function StepperComponent({ links, indice }) {
//     const iconsFinal = links.map((link) => link.icon);
//     const intermediate = [];

//     for (let i = 0; i < iconsFinal.length; i += 1) {
//         intermediate[i + 1] = iconsFinal[i];
//     }
//     icons = { ...intermediate };

//     return (
//         <Stack sx={{ width: '100%' }} spacing={4}>
//             <Stepper
//                 alternativeLabel
//                 activeStep={indice}
//                 connector={<ColorlibConnector />}
//             >
//                 {links.map((link, index) => (
//                     <Step key={index}>
//                         <StepLabel StepIconComponent={ColorlibStepIcon}>
//                             {link}
//                         </StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//         </Stack>
//     );
// }
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {
    stepConnectorClasses,
} from '@mui/material/StepConnector';
import { Check } from '@mui/icons-material';

// eslint-disable-next-line no-unused-vars
const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient(90deg, rgba(61,65,71,1) 0%, rgba(110,123,142,1) 100%);',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient(90deg, rgba(61,65,71,1) 0%, rgba(110,123,142,1) 100%);',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient(90deg, rgba(61,65,71,1) 0%, rgba(110,123,142,1) 100%);',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient(90deg, rgba(61,65,71,1) 0%, rgba(110,123,142,1) 100%);',
    }),
}));

let icons;
function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

export default function StepperComponent({ links, indice }) {
    const iconsFinal = links.map((link) => link.icon);
    const intermediate = [];

    for (let i = 0; i < iconsFinal.length; i += 1) {
        intermediate[i + 1] = iconsFinal[i];
    }
    icons = { ...intermediate };

    return (
        <Stack sx={{ width: '100%', marginBottom: 5 }} spacing={4}>
            <Stepper
                sx={{ width: '100%' }}
                alternativeLabel
                activeStep={indice}
                connector={<ColorlibConnector />}
            >
                {links.map((link) => (
                    <Step key={link} sx={{ padding: 0 }}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {link.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
