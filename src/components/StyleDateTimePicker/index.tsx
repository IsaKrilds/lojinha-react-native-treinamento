import React, {useState} from 'react';
import {Platform} from 'react-native';

import {
  InputTextContainer,
  DarkColorText,
  StyledDateContainer,
  StyledText,
  Container,
  StyledErrorText,
} from './styles';

import format from 'date-fns/format';
import {useFormikContext, ErrorMessage} from 'formik';

import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  value: Date;
  name: string;
  title?: string;
  testID?: string;
}

const StyledDatePicker: React.FC<Props> = ({value, name, title, testID}) => {
  const [date, setDate] = useState(value);
  const [show, setShow] = useState(false);

  const {setFieldValue} = useFormikContext();

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedDate: Date,
  ) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setFieldValue(name, selectedDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <Container>
      <InputTextContainer>
        <DarkColorText>{title}</DarkColorText>
        <StyledDateContainer onPress={showMode}>
          <StyledText>{format(date, 'dd/MM/YYY')}</StyledText>
        </StyledDateContainer>
        {show && (
          <DateTimePicker
            testID={testID}
            value={value}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
      </InputTextContainer>
      <ErrorMessage name={name}>
        {msg => <StyledErrorText>{msg}</StyledErrorText>}
      </ErrorMessage>
    </Container>
  );
};

export default StyledDatePicker;
