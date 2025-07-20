interface CurrencyDisplayProps {
  amount: number;
  className?: string;
}

const CurrencyDisplay = ({ amount, className = "" }: CurrencyDisplayProps) => {
  return (
    <span className={className}>
      AED {amount.toFixed(2)}
    </span>
  );
};

export default CurrencyDisplay;