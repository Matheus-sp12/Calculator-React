import { ImputContainer } from './styles';

const Input = ({value}) => {
    return (
      <ImputContainer>
        <input disabled value={value} />
      </ImputContainer>
    );
  }
  
  export default Input;