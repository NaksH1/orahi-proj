import type { ActionButtonProps } from '@@types/form';
import { useRef } from 'react';
import OptionsTooltip from '@components/Main/InterviewOptionsPanel/InterviewOption/OptionLabel/ToolTip';
import useOnClickOutside from '@hooks/useOnClickOutside';
import useTypingEffect from '@components/Main/hooks/useTypingEffect';
import { useFormSelector } from '@store/formContext';


const ActionButton = ({
  onClickHandler,
  variant,
  label,
  tooltipContent,
  setTooltipContent,
  className,
  disabled = false,
}: ActionButtonProps) => {
  const buttonRef = useRef(null);
  const { modelResponse, isLoading } = useFormSelector();

  const { text: modelMessage, isAnimating } = useTypingEffect(modelResponse);


  const buttonClasses =
    variant === 'primary'
      ? 'bg-dark text-white hover:bg-secondary'
      : 'text-white border border-solid border-border-default hover:bg-secondary-hover';

  useOnClickOutside(
    buttonRef,
    () => (setTooltipContent as React.Dispatch<React.SetStateAction<string>>)(''),
    Boolean(tooltipContent)
  );



  
  console.log('modelMessage........',modelMessage);
  

  return (
    <div className="relative">
      <button
        onClick={()=>{
           onClickHandler()
          //  voiceHandler()
        }}
        className={`relative rounded-xl px-3 py-1.5 text-sm sm:text-xs font-semibold ${buttonClasses} ${
          disabled && 'cursor-not-allowed'
        } ${className}`}
        disabled={disabled}
      >
        {label}
      </button>
      {tooltipContent && <OptionsTooltip tooltipContent={tooltipContent} />}
    </div>
  );
};

export default ActionButton;
