import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = {
  logo: css`
    height: 8em;
    width: auto;
    @media only screen and (max-width: 1024px) {
      height: 6em;
    }
  `,
};

const HoneyTracksLogo = ({ includeText }) => {
  if (includeText) {
    return (
      <svg className={styles.logo} viewBox="0 0 792.04 143.656">
        <path d="M95.513,0c4.442,0.059,4.818,3.237,7.284,5.118c5.664,4.323,10.08,10.111,15.109,15.089c1.938,1.919,5.57,3.665,5.936,7.006c0.416,1.013-1.654,7.264-2.159,8.892c-2.723,8.772-4.674,17.761-7.015,26.405c-3.85,2.129-8.449,2.492-13.219,4.042c-4.561,1.48-9.94,2.879-14.57,4.311c-2.157,0.667-7.935,2.483-9.712,1.348c-2.42-0.848-4.619-4.337-6.206-6.197c-1.257-1.476-3.202-2.659-4.587-4.042c-3.056-3.053-5.835-6.389-8.902-9.43c-1.897-1.882-5.37-3.672-6.206-6.466c-0.571-1.914,0.901-4.61,1.349-5.929c1.514-4.457,2.402-9.233,3.778-13.471c1.383-4.265,2.027-8.615,3.237-12.664c0.602-2.014,0.358-3.85,1.888-4.851c1.445-0.945,3.665-0.726,5.397-1.348c6.25-2.241,13.731-3.664,19.964-5.657C89.581,1.29,93.351,1.522,95.513,0zM91.465,13.74c-1.927,1.291-4.896,1.115-7.284,1.886c-4.077,1.317-8.488,2.64-12.681,3.773c-2.822,4.551-3.407,10.975-5.127,16.706c-0.502,1.672-1.916,4.815-1.078,6.735c1.048,2.406,7.255,7.573,9.443,9.431c2.818,2.395,3.624,6.48,8.902,6.466c1.651-1.107,4.109-0.983,6.205-1.617c4.586-1.258,9.174-2.515,13.76-3.772c2.754-4.397,3.493-10.971,5.126-16.436c0.477-1.595,2.106-4.385,1.349-6.736c-0.825-2.565-7.099-7.63-9.172-9.701C98.378,17.949,96.36,13.795,91.465,13.74zM696.081,26.136c3.893-0.015,8.112,0.112,11.601,0.27c0.294,0.473,0.68,0.975,1.079,1.346c-0.008,15.356-0.079,33.072,0.271,47.962c0.409,0.146,0.458,0.182,1.079,0.271c1.205-1.593,3.129-2.742,4.316-4.312c4.131-5.455,9.008-10.25,13.76-15.089c5.334-0.031,11.89-0.669,16.728,0.27c0,0.179,0,0.359,0,0.538c0.237,0.35,0.241,0.665,0.27,1.348c-7.014,7.364-14.028,14.73-21.044,22.094c0,0.449,0,0.898,0,1.349c1.825,1.886,3.264,4.077,4.857,6.197c0.808,0.718,1.618,1.437,2.427,2.156c2.852,3.786,5.795,7.246,8.635,11.045c1.615,2.161,5.976,5.239,6.476,8.084c0.039,0.246,0.097,0.595-0.271,1.078c-1.996,1.815-9.442,0.813-12.95,0.809c-1.598-0.003-3.361,0.118-4.315-0.54c-2.448-0.915-3.961-4.435-5.396-6.466c-2.748-3.887-6.341-7.501-9.174-11.317c-1.301-1.753-2.51-5.34-5.126-5.658c-0.533,1.609-0.27,4.407-0.27,6.469c0,4.848,0,9.699,0,14.549c-0.284,0.409-0.429,1.325-0.54,1.886c-2.916,1.696-10.317,1.359-14.028,0.538c-1.968-4.411-0.81-15.743-0.81-21.824c0-14.369,0-28.742,0-43.11c0-5.277-1.047-15.082,0.54-19.131C694.686,26.737,695.644,26.466,696.081,26.136zM238.505,31.254c3.27-0.085,10.329-0.394,11.601,1.348c1.36,1.792,0.54,12.822,0.54,16.167c0,14.907,0,29.82,0,44.728c0,3.746,0.866,16.572-1.35,17.513c-2.014,1.296-11.229,0.507-13.489,0c-0.09-0.269-0.181-0.538-0.271-0.808c-1.346-1.798-0.809-6.484-0.809-9.43c0-7.329,0.994-17.01-0.271-23.712c-0.18,0-0.359,0-0.539,0c-1.607-1.005-6.395-0.269-8.634-0.269c-7.213,0-17.815-0.998-24.282,0.269c-0.09,0.27-0.18,0.538-0.269,0.808c-1.033,1.671-0.271,6.585-0.271,8.893c0,7.333,0.99,17.002-0.27,23.711c-2.992,1.74-10.769,1.377-14.57,0.538c-1.977-3.508-0.809-15.67-0.809-21.016c0-12.753,0-25.509,0-38.262c0-6.266-0.788-14.336,0.54-19.67c3.656-0.937,10.914-0.927,14.569,0c0.732,2.96,0.54,7.532,0.54,11.317c0,6.198,0,12.396,0,18.592c2.005,1.204,6.219,0.809,9.443,0.809c7.194,0,14.39,0,21.583,0c0.721,0.497,1.92,0.179,2.699,0c0.259-0.477,0.339-0.453,0.54-1.079c0.947-1.536,0-5.761,0-8.083c0-7.159-0.543-15.694,0.54-21.286C236.003,32.012,237.736,31.768,238.505,31.254zM501.287,31.254c16.001-0.016,32.746-0.392,48.294,0.27c0.347,0.494,0.53,0.462,0.81,1.078c1.308,1.433,0.71,11.513-0.54,12.394c-1.186,0.897-4.184,0.539-6.205,0.539c-5.305,0-10.611,0-15.917,0c-1.797,3.001-0.81,13.338-0.81,18.053c0,15.178,0,30.359,0,45.536c-0.282,0.387-0.421,1.058-0.54,1.617c-3.186,1.454-10.682,1.064-14.299,0.269c-1.83-4.122-0.811-14.235-0.811-19.937c0-14.909,0-29.822,0-44.729c-2.806-1.69-16.961-0.838-21.854-0.808c-0.264-0.215-0.739-0.391-1.079-0.539c-1.196-2-1.76-11.458,0.271-12.935C491.07,30.241,498.697,32.853,501.287,31.254zM44.251,51.193c0.834-0.025,1.708-0.037,2.159,0.27c2.598,0.75,5.929,5.384,7.824,7.275c6.263,6.255,12.482,12.468,18.616,18.86c0.005,2.719-0.772,4.258-1.348,6.197c-0.18,1.348-0.36,2.695-0.54,4.041c-1.432,4.364-3.04,9.683-4.316,14.283c-0.962,3.464-1.193,8.958-2.968,11.584c-1.529,2.265-5.446,2.03-8.364,2.966c-5.761,1.843-11.973,2.902-18.077,4.849c-3.136,1.001-6.646,2.634-10.521,2.694c-9.64-8.106-17.95-17.679-26.71-26.674c-0.104-4.987,1.998-9.188,3.238-13.204c2.426-7.854,3.161-15.882,6.205-23.171c7.069-3.83,18.09-5.208,26.171-7.814C38.249,52.501,42.162,52.724,44.251,51.193zM283.561,54.966c23.015-0.273,36.907,20.306,27.521,42.303c-3.67,8.6-11.596,13.131-21.854,15.358c-4.584,0.996-10.342-0.46-13.219-1.617c-9.301-3.738-14.832-9.682-17.807-19.669c-0.568-1.905-0.08-3.524-0.54-5.658c-0.814-3.778,0.135-9.112,1.349-12.125c2.844-7.062,7.702-13.172,14.569-16.167c2.158-0.628,4.316-1.257,6.476-1.886C281.304,55.192,282.639,55.542,283.561,54.966zM603.541,54.966c11.109,0.084,19.624,3.999,22.933,11.856c2.63,6.242,2.158,15.416,2.158,24.251c0,6.317,0.172,13.247-0.27,19.129c-0.835,0.555-0.79,0.933-2.159,1.078c-1.529,0.98-8.605,0.112-10.521,0c-0.605-1.041-1.433-3.587-2.698-3.773c-8.858,9.199-28.003,5.205-33.186-4.579c-0.929-1.758-2.764-5.369-2.157-8.354c2.871-14.158,11.623-14.755,25.36-17.782c3.488-0.77,7.484,0.074,10.792-0.539c0-0.181,0-0.361,0-0.54c1.595-2.561-2.388-5.613-3.776-6.467c-3.938-2.415-11.505-1.834-15.648,0c-2.212,0.98-3.349,3.16-6.206,3.503c-1.938-1.98-6.572-5.543-6.744-8.892c3.342-3.036,7.027-5.709,11.87-7.274c2.088-0.676,4.513-0.889,6.476-1.348C601.014,54.943,602.66,55.524,603.541,54.966zM665.053,54.966c9.847-0.068,16.077,3.55,21.045,8.353c0,0.539,0,1.079,0,1.616c-2.214,2.1-6.181,7.218-9.713,7.544c-3.811-3.824-11.91-6.286-17.808-2.425c-3.639,2.386-5.933,7.16-5.934,13.203c0,1.617,0,3.233,0,4.85c1.896,7.505,8.864,14.392,18.886,11.048c2.503-0.836,3.563-3.178,6.475-3.503c2.123,2.021,7.821,6.084,8.094,9.431c-0.93,0.965-1.563,2.211-2.698,2.963c-5.949,3.95-18.728,6.565-27.788,3.234c-11.588-4.26-23.494-18.61-17.808-36.105c2.834-8.72,8.742-15.026,16.997-18.322c2.43-0.539,4.856-1.079,7.286-1.617C663.135,55.002,664.345,55.398,665.053,54.966zM769.465,54.966c10.94,0.226,16.298,2.792,21.853,8.353c0,0.359,0,0.718,0,1.079c-2.186,2.273-5.976,7.487-9.98,7.543c-2.037-3.092-9.158-6.805-14.57-4.58c-1.404,0.578-2.227,1.729-3.236,2.694c-0.092,0.72-0.181,1.438-0.271,2.156c0.612,0.701,0.853,1.891,1.619,2.425c4.128,2.881,10.732,2.771,15.647,4.85c6.319,2.673,9.718,6.496,11.331,14.012c0.971,4.514-2.18,9.391-3.776,11.586c-4.82,6.63-17.904,9.902-29.138,6.467c-4.897-1.497-8.854-4.402-12.143-7.546c0-0.538,0-1.076,0-1.615c2.311-2.207,5.988-7.521,9.983-7.545c2.425,3.267,10.695,7.979,16.729,4.851c1.265-0.655,2.206-1.018,2.696-2.426c0.547-0.679,0.565-1.674,0.54-2.963c-0.929-0.954-1.251-2.236-2.428-2.965c-2.989-1.853-7.178-1.796-10.791-2.963c-6.655-2.153-16.765-7.277-14.301-18.052c0.249-1.086,0.731-2.591,1.08-3.504c0.862-2.263,2.006-4.86,3.778-6.198c2.215-1.673,4.961-3.39,7.823-4.311C764.429,55.864,766.948,55.415,769.465,54.966zM347.773,55.235c22.532-0.174,22.933,13.303,22.933,35.299c0,6.524,0.674,14.586-0.54,20.207c-3.05,1.395-10.022,1.031-13.49,0.269c-1.311-2.362-1.079-6.418-1.079-10.237c0-11.852,3.567-36.311-11.331-32.604c-10.207,2.54-8.903,14.776-8.903,27.483c0,3.574,0.862,14.396-1.349,15.357c-2.353,1.603-9.43,0.433-12.411,0.271c-0.555-0.833-0.934-0.788-1.079-2.156c-1.036-1.666-0.271-11.002-0.271-13.742c0-12.443-0.6-25.738,0.271-37.721c2.574-1.669,8.448-1.122,12.68-1.078c0.381,0.407,0.746,0.594,1.079,1.078c0.502,0.708,0.625,2.264,0.811,3.233c0.448,0,0.899,0,1.348,0c1.651-2.405,5.329-4.148,8.364-5.12C345.769,55.466,347.024,55.718,347.773,55.235zM401.732,55.235c17.008-0.207,24.246,5.469,28.598,17.783c0.958,2.708,3.578,13.432,0.541,15.628c-1.818,1.359-7.657,0.539-10.522,0.539c-6.023,0-12.051,0-18.076,0c-3.167,0-6.988-0.241-9.713,0.269c-0.17,0.474-0.052,0.263-0.27,0.54c1.219,6.187,9.414,12.385,18.347,9.7c3.602-1.084,6.39-3.207,8.633-5.657c0.54,0,1.079,0,1.618,0c2.754,2.623,5.892,4.342,8.365,7.273c-0.717,3.006-3.421,4.672-5.667,6.196c-3.138,2.133-6.429,3.776-10.792,4.852c-9.124,2.247-20.285-1.651-25.09-4.852c-12.319-8.201-14.131-29.569-4.857-42.301c1.916-2.629,7.088-6.483,10.253-7.815C395.166,56.522,400.125,56.257,401.732,55.235zM572.243,55.235c2.045-0.05,4.061-0.007,5.397,0.539c1.61,2.781,1.281,9.209,0.539,12.666c-1.631,0.853-5.078,0.571-7.554,0.537c-0.572,0.38-1.43,0.238-2.158,0.539c-3.033,1.254-5.722,3.749-7.015,6.737c-1.307,3.018-1.079,7.492-1.079,11.854c0,7.301,0.175,15.235-0.27,22.095c-0.9,0.602-0.862,0.993-2.429,1.078c-1.526,0.979-9.399,0.162-11.332,0c-2.084-3.334-1.349-10.534-1.349-15.898c0-12.445-0.586-25.735,0.27-37.721c0.474-0.292,0.976-0.678,1.349-1.078c2.314-0.038,10.228-0.604,11.603,0.27c2.01,0.723,0.894,2.383,1.889,4.042c0.316,0.216,0.453,0.208,1.079,0.27c1.589-1.654,3.708-3.639,5.936-4.581C568.649,55.935,570.872,56.139,572.243,55.235zM478.083,56.313c2.337,0.109,11.116-0.164,12.143,1.077c0.185,0.208,0.354,0.601,0.539,0.809c-0.354,1.764-1.294,3.175-1.888,4.581c-2.203,5.207-3.883,10.39-5.937,15.358c-5.152,12.472-9.31,25.304-14.568,37.451c-3.045,7.032-4.67,14.725-10.522,18.862c-4.43,3.133-12.71,3.916-19.426,2.425c-1.702-2.925-0.215-8.125,0-11.854c0.735-0.46,0.675-0.684,1.889-0.81c0.639-0.316,1.658,0.085,2.428,0.271c2.378,0.568,5.236-0.485,6.475-1.347c1.984-1.379,4.9-8.577,5.667-11.317c0-0.987,0-1.977,0-2.964c-0.785-2.704-2.686-5.334-3.776-7.814c-0.572-1.299-0.511-2.432-1.079-3.772c-2.386-5.62-5.417-11.612-7.825-17.244c-2.588-6.055-4.69-12.086-7.555-17.783c-0.72-1.432-2.303-4.501-0.27-5.389c1.406-0.9,12.433-0.38,14.299,0c4.253,7.273,7.193,17.806,10.522,25.866c0.925,2.238,2.047,8.419,4.587,8.622c0.533-2.279,1.917-4.651,2.697-6.736c0.727-1.937,0.688-3.425,1.35-5.389c1.17-3.469,2.855-7.228,4.048-10.776c0.862-2.573,2.566-10.451,4.315-11.587C476.683,56.536,477.636,56.603,478.083,56.313zM40.204,65.206c-1.5,0.933-3.574,0.752-5.396,1.347c-2.994,0.976-6.59,1.949-9.712,2.963c-2.288,0.742-4.888,0.461-5.667,2.695c-1.622,2.128-1.582,6.106-2.427,8.891c-0.559,1.839-3.585,10.431-3.237,12.125c0.387,1.891,4.434,5.335,5.936,6.468c1.815,1.37,3.47,3.559,4.856,5.389c1.799,1.616,3.598,3.234,5.396,4.85c5.961,0.045,12.53-2.813,17.537-4.311c1.97-0.591,4.153-0.358,5.396-1.618c1.989-2.016,2.528-9.625,3.508-12.931c0.496-1.677,3.237-7.837,1.889-9.972c-0.784-2.397-3.189-3.563-4.856-5.118c-0.54-0.719-1.08-1.438-1.619-2.155c-3.308-2.516-6.189-5.743-9.172-8.623C41.823,65.206,41.015,65.206,40.204,65.206zM404.43,66.822c-1.093,0.663-2.766,0.323-4.046,0.808c-3.659,1.385-7.768,4.774-8.095,9.431c0.393,0.23,0.773,0.487,1.08,0.808c5.58,0.043,18.907,1.048,22.933-0.538c0.229-0.66,0.28-1.666,0.268-2.694c-0.684-0.901-0.703-2.27-1.348-3.233C413.221,68.406,409.452,66.815,404.43,66.822zM283.831,67.899c-1.54,0.935-3.686,0.72-5.127,1.616c-2.999,1.868-5.257,5.818-6.204,9.7c0,1.526,0,3.055,0,4.58c0,7.499,2.236,11.371,6.744,14.281c1.457,0.941,4.806,2.489,7.555,1.886c5.832-1.278,9.298-3.936,11.331-8.89c0.76-1.854,0.808-3.97,0.81-6.469C298.947,73.799,294.786,67.723,283.831,67.899zM113.588,70.594c0.991-0.038,2.396-0.117,2.968,0.27c3.31,1.087,5.478,5.305,7.825,7.546c6.321,6.027,12.264,12.324,18.345,18.591c0.114,5.495-2.143,10.09-3.506,14.55c-2.256,7.371-2.825,15.015-5.667,21.824c-7.371,4.069-18.554,5.19-27.249,7.813c-1.723,0.52-7.372,2.81-9.173,2.426c-2.831-0.603-4.918-4.372-6.746-6.197c-4.856-4.85-9.709-9.702-14.57-14.55c-1.85-1.845-4.903-3.351-5.665-6.196c-0.678-2.534,1.79-8.563,2.428-10.509c2.739-8.352,4.511-17.202,6.744-25.598c3.157-1.71,6.846-1.96,10.793-3.233c4.623-1.492,10.174-2.793,14.839-4.312C107.784,72.098,111.495,72.278,113.588,70.594zM111.161,84.335c-1.955,1.294-4.775,1.174-7.284,1.887c-2.804,0.797-6.031,1.844-8.634,2.695c-2.346,0.765-4.866,0.43-5.665,2.692c-1.185,1.311-1.006,3.459-1.619,5.391c-1.046,3.295-2.209,7.259-3.237,10.507c-0.412,1.306-1.292,4.147-0.81,5.66c0.527,1.647,2.635,2.898,3.778,4.041c2.877,2.874,5.755,5.748,8.633,8.621c1.224,1.224,2.423,3.305,4.317,3.773c2.387,0.591,5.518-1.355,7.285-1.888c4.905-1.469,9.526-2.637,14.299-3.771c2.989-4.662,3.566-11.256,5.396-17.244c0.487-1.594,2.105-4.408,1.079-6.466c-1.361-2.729-5.893-5.618-8.094-7.814C118.064,89.884,115.398,84.919,111.161,84.335zM604.889,87.3c-1.808,1.113-4.817,0.8-6.745,1.617c-2.215,0.938-3.334,2.441-4.856,4.041c-0.495,5.43,1.883,7.535,7.554,7.544c1.261,0,2.52,0,3.777,0c5.422-1.396,10.704-5.67,9.174-12.934c-0.18,0-0.358,0-0.539,0C611.746,86.604,607.024,87.263,604.889,87.3z" />
      </svg>
    );
  }

  return (
    <svg className={styles.logo} viewBox="0 0 142.73 143.656">
      <path d="M95.513,0c4.442,0.059,4.818,3.237,7.284,5.118c5.664,4.323,10.08,10.111,15.109,15.089c1.938,1.919,5.57,3.665,5.936,7.006c0.416,1.013-1.654,7.264-2.159,8.892c-2.723,8.772-4.674,17.761-7.015,26.405c-3.85,2.129-8.449,2.492-13.219,4.042c-4.561,1.48-9.94,2.879-14.57,4.311c-2.157,0.667-7.935,2.483-9.712,1.348c-2.42-0.848-4.619-4.337-6.206-6.197c-1.257-1.476-3.202-2.659-4.587-4.042c-3.056-3.053-5.835-6.389-8.902-9.43c-1.897-1.882-5.37-3.672-6.206-6.466c-0.571-1.914,0.901-4.61,1.349-5.929c1.514-4.457,2.402-9.233,3.778-13.471c1.383-4.265,2.027-8.615,3.237-12.664c0.602-2.014,0.358-3.85,1.888-4.851c1.445-0.945,3.665-0.726,5.397-1.348c6.25-2.241,13.731-3.664,19.964-5.657C89.581,1.29,93.351,1.522,95.513,0zM91.465,13.74c-1.927,1.291-4.896,1.115-7.284,1.886c-4.077,1.317-8.488,2.64-12.681,3.773c-2.822,4.551-3.407,10.975-5.127,16.706c-0.502,1.672-1.916,4.815-1.078,6.735c1.048,2.406,7.255,7.573,9.443,9.431c2.818,2.395,3.624,6.48,8.902,6.466c1.651-1.107,4.109-0.983,6.205-1.617c4.586-1.258,9.174-2.515,13.76-3.772c2.754-4.397,3.493-10.971,5.126-16.436c0.477-1.595,2.106-4.385,1.349-6.736c-0.825-2.565-7.099-7.63-9.172-9.701C98.378,17.949,96.36,13.795,91.465,13.74zM44.251,51.193c0.834-0.025,1.708-0.037,2.159,0.27c2.598,0.75,5.929,5.384,7.824,7.275c6.263,6.255,12.482,12.468,18.616,18.86c0.005,2.719-0.772,4.258-1.348,6.197c-0.18,1.348-0.36,2.695-0.54,4.041c-1.432,4.364-3.04,9.683-4.316,14.283c-0.962,3.464-1.193,8.958-2.968,11.584c-1.529,2.265-5.446,2.03-8.364,2.966c-5.761,1.843-11.973,2.902-18.077,4.849c-3.136,1.001-6.646,2.634-10.521,2.694c-9.64-8.106-17.95-17.679-26.71-26.674c-0.104-4.987,1.998-9.188,3.238-13.204c2.426-7.854,3.161-15.882,6.205-23.171c7.069-3.83,18.09-5.208,26.171-7.814C38.249,52.501,42.162,52.724,44.251,51.193zM40.204,65.206c-1.5,0.933-3.574,0.752-5.396,1.347c-2.994,0.976-6.59,1.949-9.712,2.963c-2.288,0.742-4.888,0.461-5.667,2.695c-1.622,2.128-1.582,6.106-2.427,8.891c-0.559,1.839-3.585,10.431-3.237,12.125c0.387,1.891,4.434,5.335,5.936,6.468c1.815,1.37,3.47,3.559,4.856,5.389c1.799,1.616,3.598,3.234,5.396,4.85c5.961,0.045,12.53-2.813,17.537-4.311c1.97-0.591,4.153-0.358,5.396-1.618c1.989-2.016,2.528-9.625,3.508-12.931c0.496-1.677,3.237-7.837,1.889-9.972c-0.784-2.397-3.189-3.563-4.856-5.118c-0.54-0.719-1.08-1.438-1.619-2.155c-3.308-2.516-6.189-5.743-9.172-8.623C41.823,65.206,41.015,65.206,40.204,65.206zM113.588,70.594c0.991-0.038,2.396-0.117,2.968,0.27c3.31,1.087,5.478,5.305,7.825,7.546c6.321,6.027,12.264,12.324,18.345,18.591c0.114,5.495-2.143,10.09-3.506,14.55c-2.256,7.371-2.825,15.015-5.667,21.824c-7.371,4.069-18.554,5.19-27.249,7.813c-1.723,0.52-7.372,2.81-9.173,2.426c-2.831-0.603-4.918-4.372-6.746-6.197c-4.856-4.85-9.709-9.702-14.57-14.55c-1.85-1.845-4.903-3.351-5.665-6.196c-0.678-2.534,1.79-8.563,2.428-10.509c2.739-8.352,4.511-17.202,6.744-25.598c3.157-1.71,6.846-1.96,10.793-3.233c4.623-1.492,10.174-2.793,14.839-4.312C107.784,72.098,111.495,72.278,113.588,70.594zM111.161,84.335c-1.955,1.294-4.775,1.174-7.284,1.887c-2.804,0.797-6.031,1.844-8.634,2.695c-2.346,0.765-4.866,0.43-5.665,2.692c-1.185,1.311-1.006,3.459-1.619,5.391c-1.046,3.295-2.209,7.259-3.237,10.507c-0.412,1.306-1.292,4.147-0.81,5.66c0.527,1.647,2.635,2.898,3.778,4.041c2.877,2.874,5.755,5.748,8.633,8.621c1.224,1.224,2.423,3.305,4.317,3.773c2.387,0.591,5.518-1.355,7.285-1.888c4.905-1.469,9.526-2.637,14.299-3.771c2.989-4.662,3.566-11.256,5.396-17.244c0.487-1.594,2.105-4.408,1.079-6.466c-1.361-2.729-5.893-5.618-8.094-7.814C118.064,89.884,115.398,84.919,111.161,84.335z" />
    </svg>
  );
};

HoneyTracksLogo.propTypes = {
  includeText: PropTypes.bool.isRequired,
};

HoneyTracksLogo.defaultProps = {
  includeText: false,
};

export default HoneyTracksLogo;
