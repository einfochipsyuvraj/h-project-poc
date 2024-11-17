import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface Buttons {
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  primaryVariant?: string;
  secondaryVariant?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
}

const Buttons: React.FC<Buttons> = ({
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  primaryVariant = 'primary',
  secondaryVariant = 'secondary',
  primaryClassName = '',
  secondaryClassName = '',
}) => {
  return (
    <Row>
      <Col>
        <Button
          variant={primaryVariant}
          onClick={onPrimaryClick}
          className={`me-2 ${primaryClassName}`}
        >
          {primaryLabel}
        </Button>
        <Button
          variant={secondaryVariant}
          onClick={onSecondaryClick}
          className={secondaryClassName}
        >
          {secondaryLabel}
        </Button>
      </Col>
    </Row>
  );
};

export default Buttons;
