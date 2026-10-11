import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

import {
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import {  FiAtSign } from 'react-icons/fi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function Contacts() {
    const [open, setOpen] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const useStyles = makeStyles(() => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': { border: `4px solid ${theme.primary600}` },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': { border: `4px solid ${theme.primary600}` },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    // ✅ EmailJS Integration
    const handleContactForm = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setErrMsg('Enter all the fields');
            setOpen(true);
            return;
        }

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setErrMsg('Email service is not configured. Add EmailJS env variables.');
            setOpen(true);
            return;
        }

        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                EMAILJS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setErrMsg('Message sent successfully!');
                    setOpen(true);
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.error('FAILED...', error);
                    setErrMsg('Failed to send message. Try again later.');
                    setOpen(true);
                }
            );
    };

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>Name</label>
                                <input
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>

                            <div className='input-container'>
                                <label htmlFor='Email' className={classes.label}>Email</label>
                                <input
                                    placeholder='John@doe.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>

                            <div className='input-container'>
                                <label htmlFor='Message' className={classes.label}>Message</label>
                                <textarea
                                    placeholder='Type your message...'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name='Message'
                                    className={`form-message ${classes.message}`}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button type='submit' className={classes.submitBtn}>
                                    <p>Send</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend className='send-icon' />
                                    </div>
                                </button>
                            </div>
                        </form>

                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    <div className='contacts-details'>
                        <div className='contact-inline-row'>
                            <a href={`mailto:${contactsData.email}`} className='contact-inline-item'>
                                <div className={classes.detailsIcon}><FiAtSign /></div>
                                <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                            </a>

                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className='contact-inline-item'>
                                <div className={classes.detailsIcon}><FaLinkedinIn /></div>
                                <p style={{ color: theme.tertiary }}>LinkedIn</p>
                            </a>

                            {/* <a href={`tel:${contactsData.phone}`} className='contact-inline-item'>
                                <div className={classes.detailsIcon}><FiPhone /></div>
                                <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
                            </a> */}

                            <a href={socialsData.github} target='_blank' rel='noreferrer' className='contact-inline-item'>
                                <div className={classes.detailsIcon}><FaGithub /></div>
                                <p style={{ color: theme.tertiary }}>GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={theme.contactsimg} alt='contacts' className='contacts--img' />
        </div>
    );
}

export default Contacts;
