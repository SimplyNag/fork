import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      personalForm: {
        state: { nome, email, cpf, endereco, cidade, estado },
      },
    } = this.props;
    const {
      professionalForm: {
        state: { curriculo, cargo, descricao },
      },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          {email}
        </div>
        <div>
          CPF:
          {cpf}
        </div>
        <div>
          Endereço:
          {endereco}
        </div>
        <div>
          Cidade:
          {cidade}
        </div>
        <div>
          Estado:
          {estado}
        </div>
        <div>
          Currículo:
          {curriculo}
        </div>
        <div>
          Cargo:
          {cargo}
        </div>
        <div>
          Descrição do cargo:
          {descricao}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personalForm: state.personalFormReducer,
  professionalForm: state.professionalFormReducer,
});

FormDataDisplay.propTypes = {
  personalForm: PropTypes.object(PropTypes.string),
  professionalForm: PropTypes.object(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(FormDataDisplay);
