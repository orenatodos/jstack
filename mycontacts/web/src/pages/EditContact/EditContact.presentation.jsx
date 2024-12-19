import PropTypes from 'prop-types'

import { ContactForm } from '../../components/ContactForm'
import { Loader } from '../../components/Loader'
import { PageHeader } from '../../components/PageHeader'

export function EditContactPresentation ({
  isLoading,
  contactName,
  contactFormRef,
  onSubmit
}) {
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={
          isLoading
            ? 'Carregando...'
            : `Editar ${contactName}`
        }
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel='Salvar alterações'
        onSubmit={onSubmit}
      />
    </>
  )
}

EditContactPresentation.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  contactName: PropTypes.string.isRequired,
  contactFormRef: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}
