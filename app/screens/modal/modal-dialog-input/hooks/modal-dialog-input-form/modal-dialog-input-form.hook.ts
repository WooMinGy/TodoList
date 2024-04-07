import { yupResolver } from '@hookform/resolvers/yup';
import isEmpty from 'lodash/isEmpty';
import { useCallback } from 'react';
import { useController, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ETextFieldForm } from '../../modal-dialog-input.type';

type IModalDialogInputFormInput = { content?: string };
type IModalDialogInputFormOutput = {
  newContent: string;
  setContent: Util<string, void>;
  isDisabled: boolean;
};

export const useModalDialogInputForm: Hook<
  IModalDialogInputFormInput,
  IModalDialogInputFormOutput
> = ({ content }) => {
  const schema = yup.object().shape({
    [ETextFieldForm.CONTENT]: yup.string().required(),
  });

  const { control } = useForm({
    defaultValues: {
      [ETextFieldForm.CONTENT]: content ? content : '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const {
    field: { value, onChange },
  } = useController({
    control,
    name: ETextFieldForm.CONTENT,
  });

  const setContent = useCallback((text: string) => {
    onChange(text);
  }, []);

  const newContent = value as unknown as string;
  const isDisabled = isEmpty(value) || newContent === content;

  return { newContent, setContent, isDisabled };
};
