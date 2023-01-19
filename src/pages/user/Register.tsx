import React, { ReactNode, useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
	useMediaQuery
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Form from './Form';

import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthIndicator } from 'utils/password-strength';

const Register = ({ ...others }) => {
	const theme = useTheme();
	const scriptedRef = useScriptRef();

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: Event) => {
		event.preventDefault();
	};

	const changePassword = (value: string) => {
		const temp = strengthIndicator(value);
	};

	useEffect(() => {
		changePassword('123456');
	}, []);

	return (
		<Form type={'register'}>
			<Grid item xs={12}>
				<Formik
					initialValues={{ email: '', password: '', name: '', submit: null }}
					validationSchema={Yup.object().shape({
						email: Yup.string().email('올바른 이메일 형식이 아닙니다').max(255).required('이메일을 입력해주세요'),
						password: Yup.string().max(255).required('비밀번호를 입력해주세요'),
						name: Yup.string().max(255).required('비밀번호를 입력해주세요')
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
							<FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
								<InputLabel htmlFor="outlined-adornment-email-register">이름</InputLabel>
								<OutlinedInput
									id="outlined-adornment-email-register"
									type="name"
									value={values.name}
									name="name"
									onBlur={handleBlur}
									onChange={handleChange}
									inputProps={{}}
								/>
								{touched.name && errors.name && (
									<FormHelperText error id="standard-weight-helper-text--register">
										{errors.name}
									</FormHelperText>
								)}
							</FormControl>

							<FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
								<InputLabel htmlFor="outlined-adornment-email-register">이메일 주소</InputLabel>
								<OutlinedInput
									id="outlined-adornment-email-register"
									type="email"
									value={values.email}
									name="email"
									onBlur={handleBlur}
									onChange={handleChange}
									inputProps={{}}
								/>
								{touched.email && errors.email && (
									<FormHelperText error id="standard-weight-helper-text--register">
										{errors.email}
									</FormHelperText>
								)}
							</FormControl>

							<FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
								<InputLabel htmlFor="outlined-adornment-password-register">비밀번호</InputLabel>
								<OutlinedInput
									id="outlined-adornment-password-register"
									type={showPassword ? 'text' : 'password'}
									value={values.password}
									name="password"
									label="Password"
									onBlur={handleBlur}
									onChange={(e) => {
										handleChange(e);
										changePassword(e.target.value);
									}}
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
									inputProps={{}}
								/>
								{touched.password && errors.password && (
									<FormHelperText error id="standard-weight-helper-text-password-register">
										{errors.password}
									</FormHelperText>
								)}
							</FormControl>

							{errors.submit && (
								<Box sx={{ mt: 3 }}>
									<FormHelperText error>{errors.submit}</FormHelperText>
								</Box>
							)}
							<Box sx={{ mt: 2 }}>
								<AnimateButton>
									<Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
										회원가입
									</Button>
								</AnimateButton>
							</Box>
						</form>
					)}
				</Formik>
			</Grid>
			<Grid item xs={12}>
				<Grid item container direction="column" alignItems="center" xs={12}>
					<Typography>계정이 있으십니까?</Typography>
				</Grid>
			</Grid>
		</Form>
	);
};

export default Register;
