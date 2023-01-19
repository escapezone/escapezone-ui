import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Stack, Typography, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Form from './Form';

import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';

const Login = ({ ...others }) => {
	const theme = useTheme();

	const scriptedRef = useScriptRef();

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: Event) => {
		event.preventDefault();
	};

	return (
		<Form type={'login'}>
			<Grid item xs={12}>
				<Formik
					initialValues={{ email: '', password: '', submit: null }}
					validationSchema={Yup.object().shape({
						email: Yup.string().max(255).required('아이디를 입력해주세요'),
						password: Yup.string().max(255).required('비밀번호를 입력해주세요')
					})}
					onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
						try {
							if (scriptedRef.current) {
								setStatus({ success: true });
								setSubmitting(false);
							}
						} catch (err: any) {
							console.error(err);
							if (scriptedRef.current) {
								setStatus({ success: false });
								setErrors({ submit: err.message });
								setSubmitting(false);
							}
						}
					}}
				>
					{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
						<form noValidate onSubmit={handleSubmit} {...others}>
							<FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
								<InputLabel htmlFor="outlined-adornment-email-login">아이디</InputLabel>
								<OutlinedInput
									id="outlined-adornment-email-login"
									type="email"
									value={values.email}
									name="email"
									onBlur={handleBlur}
									onChange={handleChange}
									label="Email Address / Username"
									inputProps={{}}
								/>
								{touched.email && errors.email && (
									<FormHelperText error id="standard-weight-helper-text-email-login">
										{errors.email}
									</FormHelperText>
								)}
							</FormControl>

							<FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
								<InputLabel htmlFor="outlined-adornment-password-login">비밀번호</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password-login"
									type={showPassword ? 'text' : 'password'}
									value={values.password}
									name="password"
									onBlur={handleBlur}
									onChange={handleChange}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
												size="large"
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
									inputProps={{}}
								/>
								{touched.password && errors.password && (
									<FormHelperText error id="standard-weight-helper-text-password-login">
										{errors.password}
									</FormHelperText>
								)}
							</FormControl>
							<Stack direction="row" alignItems="left" justifyContent="flex-end">
								<Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
									아이디 찾기
								</Typography>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
									비밀번호 찾기
								</Typography>
							</Stack>
							{errors.submit && (
								<Box sx={{ mt: 3 }}>
									<FormHelperText error>{errors.submit}</FormHelperText>
								</Box>
							)}

							<Box sx={{ mt: 2 }}>
								<Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
									로그인
								</Button>
							</Box>
						</form>
					)}
				</Formik>
			</Grid>
			<Grid item xs={12}>
				<Grid item container direction="column" alignItems="center" xs={12}>
					<Typography>계정이 없으십니까?</Typography>
				</Grid>
			</Grid>
		</Form>
	);
};

export default Login;
