import { useForm } from '@formspree/react';
import sendPlaneFill from '@iconify/icons-ri/send-plane-fill';
import { Icon } from '@iconify/react';
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import styles from './ContactForm.module.scss';

Yup.setLocale(ptForm);

interface ContactFormError {
  response: { data: string; status: number };
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormStatus {
  message: string;
  type: string;
}

interface ContactFormStatusProps {
  [key: string]: ContactFormStatus;
}

const formStatusProps: ContactFormStatusProps = {
  success: {
    message: 'Mensagem enviada com sucesso.',
    type: 'success',
  },
  error: {
    message: 'Houve algum erro, tente novamente, por favor.',
    type: 'error',
  },
};

const ContactForm = (): JSX.Element => {
  const intialValues = { name: '', email: '', message: '' };
  // const [formValues, setFormValues] = useState(intialValues);
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<ContactFormStatus>({
    message: '',
    type: '',
  });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [, handleSubmit] = useForm('xbjqrpqy');

  const fieldsHelper = {
    name: 'Por favor, digite o seu nome!',
    email: 'Por favor, digite o seu e-mail!',
    message: 'Por favor, digite a mensagem que quer nos enviar!',
  };

  const validation = Yup.object().shape({
    name: Yup.string().required(fieldsHelper.name),
    email: Yup.string().email().required(fieldsHelper.email),

    message: Yup.string().required(fieldsHelper.message),
  });

  const submitForm = async (data: ContactFormData, resetForm: () => void) => {
    console.log(data);
    try {
      const res = await handleSubmit(data);
      if (res) {
        setFormStatus(formStatusProps.success);
        resetForm();
      }
    } catch (error) {
      const theError: ContactFormError = error as ContactFormError;
      const response = theError.response;
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  const showFormStatus = (status: ContactFormStatus) => {
    if (status.type === 'error') {
      toast.error(formStatus.message);
    } else if (status.type === 'success') {
      toast.success(formStatus.message);
    } else {
      toast.warning(formStatus.message);
    }
    setDisplayFormStatus(false);
  };

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validation}
      onSubmit={(values: ContactFormData, actions) => {
        submitForm(values, actions.resetForm);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {(props: FormikProps<ContactFormData>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
        } = props;

        return (
          <Form className={styles.container}>
            <div className={styles.nameEmailWrapper}>
              <div className={styles.fieldWrapper}>
                <Field
                  type="text"
                  name="name"
                  value={values.name}
                  helpertext={
                    errors.name && touched.name
                      ? errors.name.toString()
                      : fieldsHelper.name.toString()
                  }
                  placeholder="Seu nome"
                  error={errors.name && touched.name ? 'true' : 'false'}
                  data-error={errors.name && touched.name ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.nameField}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.fieldError}
                />
              </div>
              <div className={styles.fieldWrapper}>
                <Field
                  type="email"
                  name="email"
                  value={values.email}
                  helpertext={
                    errors.email && touched.email
                      ? errors.email
                      : fieldsHelper.email
                  }
                  placeholder="Seu e-mail"
                  error={errors.email && touched.email ? 'true' : 'false'}
                  data-error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.emailField}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.fieldError}
                />
              </div>
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                as="textarea"
                name="message"
                value={values.message}
                rows={3}
                helpertext={
                  errors.message && touched.message
                    ? errors.message
                    : fieldsHelper.message
                }
                placeholder="Sobre o que é seu contato?"
                error={errors.message && touched.message ? 'true' : 'false'}
                data-error={errors.message && touched.message ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.messageField}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.fieldError}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              <Icon icon={sendPlaneFill} className={styles.submitButtonIcon} />
              <span className={styles.submitButtonText}>Enviar mensagem</span>
            </button>
            <ToastContainer />
            {displayFormStatus && showFormStatus(formStatus)}
          </Form>
        );
      }}
    </Formik>
  );
};

export { ContactForm };
