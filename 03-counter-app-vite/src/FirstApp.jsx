import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {

  console.log(title);

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  subTitle: 'This is a default message'
}