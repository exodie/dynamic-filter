import React from 'react';

export const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 12,
  height = 12,
  fill = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.9974 1.33497C3.82059 1.33497 3.65102 1.40521 3.52599 1.53023C3.40097 1.65525 3.33073 1.82482 3.33073 2.00163C3.33073 2.17844 3.40097 2.34801 3.52599 2.47304C3.65102 2.59806 3.82059 2.6683 3.9974 2.6683C4.17421 2.6683 4.34378 2.59806 4.4688 2.47304C4.59382 2.34801 4.66406 2.17844 4.66406 2.00163C4.66406 1.82482 4.59382 1.65525 4.4688 1.53023C4.34378 1.40521 4.17421 1.33497 3.9974 1.33497ZM2.11073 1.33497C2.24846 0.944612 2.50389 0.606589 2.8418 0.367493C3.1797 0.128397 3.58345 0 3.9974 0C4.41134 0 4.81509 0.128397 5.153 0.367493C5.4909 0.606589 5.74633 0.944612 5.88406 1.33497H10.6641C10.8409 1.33497 11.0104 1.40521 11.1355 1.53023C11.2605 1.65525 11.3307 1.82482 11.3307 2.00163C11.3307 2.17844 11.2605 2.34801 11.1355 2.47304C11.0104 2.59806 10.8409 2.6683 10.6641 2.6683H5.88406C5.74633 3.05866 5.4909 3.39668 5.153 3.63577C4.81509 3.87487 4.41134 4.00327 3.9974 4.00327C3.58345 4.00327 3.1797 3.87487 2.8418 3.63577C2.50389 3.39668 2.24846 3.05866 2.11073 2.6683H1.33073C1.15392 2.6683 0.984349 2.59806 0.859325 2.47304C0.734301 2.34801 0.664062 2.17844 0.664062 2.00163C0.664062 1.82482 0.734301 1.65525 0.859325 1.53023C0.984349 1.40521 1.15392 1.33497 1.33073 1.33497H2.11073ZM7.9974 5.33497C7.82059 5.33497 7.65102 5.4052 7.52599 5.53023C7.40097 5.65525 7.33073 5.82482 7.33073 6.00163C7.33073 6.17845 7.40097 6.34801 7.52599 6.47304C7.65102 6.59806 7.82059 6.6683 7.9974 6.6683C8.17421 6.6683 8.34378 6.59806 8.4688 6.47304C8.59382 6.34801 8.66406 6.17845 8.66406 6.00163C8.66406 5.82482 8.59382 5.65525 8.4688 5.53023C8.34378 5.4052 8.17421 5.33497 7.9974 5.33497ZM6.11073 5.33497C6.24846 4.94461 6.50389 4.60659 6.8418 4.36749C7.1797 4.1284 7.58345 4 7.9974 4C8.41134 4 8.81509 4.1284 9.153 4.36749C9.4909 4.60659 9.74633 4.94461 9.88406 5.33497H10.6641C10.8409 5.33497 11.0104 5.4052 11.1355 5.53023C11.2605 5.65525 11.3307 5.82482 11.3307 6.00163C11.3307 6.17845 11.2605 6.34801 11.1355 6.47304C11.0104 6.59806 10.8409 6.6683 10.6641 6.6683H9.88406C9.74633 7.05866 9.4909 7.39668 9.153 7.63577C8.81509 7.87487 8.41134 8.00327 7.9974 8.00327C7.58345 8.00327 7.1797 7.87487 6.8418 7.63577C6.50389 7.39668 6.24846 7.05866 6.11073 6.6683H1.33073C1.15392 6.6683 0.984349 6.59806 0.859325 6.47304C0.734301 6.34801 0.664062 6.17845 0.664062 6.00163C0.664062 5.82482 0.734301 5.65525 0.859325 5.53023C0.984349 5.4052 1.15392 5.33497 1.33073 5.33497H6.11073ZM3.9974 9.33497C3.82059 9.33497 3.65102 9.4052 3.52599 9.53023C3.40097 9.65525 3.33073 9.82482 3.33073 10.0016C3.33073 10.1784 3.40097 10.348 3.52599 10.473C3.65102 10.5981 3.82059 10.6683 3.9974 10.6683C4.17421 10.6683 4.34378 10.5981 4.4688 10.473C4.59382 10.348 4.66406 10.1784 4.66406 10.0016C4.66406 9.82482 4.59382 9.65525 4.4688 9.53023C4.34378 9.4052 4.17421 9.33497 3.9974 9.33497ZM2.11073 9.33497C2.24846 8.94461 2.50389 8.60659 2.8418 8.36749C3.1797 8.1284 3.58345 8 3.9974 8C4.41134 8 4.81509 8.1284 5.153 8.36749C5.4909 8.60659 5.74633 8.94461 5.88406 9.33497H10.6641C10.8409 9.33497 11.0104 9.4052 11.1355 9.53023C11.2605 9.65525 11.3307 9.82482 11.3307 10.0016C11.3307 10.1784 11.2605 10.348 11.1355 10.473C11.0104 10.5981 10.8409 10.6683 10.6641 10.6683H5.88406C5.74633 11.0587 5.4909 11.3967 5.153 11.6358C4.81509 11.8749 4.41134 12.0033 3.9974 12.0033C3.58345 12.0033 3.1797 11.8749 2.8418 11.6358C2.50389 11.3967 2.24846 11.0587 2.11073 10.6683H1.33073C1.15392 10.6683 0.984349 10.5981 0.859325 10.473C0.734301 10.348 0.664062 10.1784 0.664062 10.0016C0.664062 9.82482 0.734301 9.65525 0.859325 9.53023C0.984349 9.4052 1.15392 9.33497 1.33073 9.33497H2.11073Z"
        fill={fill}
      />
    </svg>
  );
};
