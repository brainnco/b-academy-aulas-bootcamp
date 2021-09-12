import styled, { css } from 'styled-components/macro'
import * as icon from 'ui/icons'
import { StatusIcon, StatusIconProps } from './status-icon'

export const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  min-width: 332px;
  max-width: 332px;
  padding: 32px;
`

export const H1 = styled.h1`
  margin: 0;
  text-align: center;
`

export const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  position: relative;
  padding-left: 20px;
  margin: 40px 0 32px;

  span {
    background-color: ${theme.colors.black};
    display: inline-block;
    position: relative;
    padding: 0 10px;
    z-index: 1;
  }

  &::before {
    background: ${theme.colors.primary};
    border-radius: 2px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 0;
  }
`}`

export const Img = styled.img`
  display: inline-block;
`

export const LogoLink = styled.a`
  display: block;
`

const DefaultButton = styled.button`
  cursor: pointer;
`

export const Button = styled(DefaultButton)`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 4px;
  color: ${theme.colors.lightBlack};
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  margin-bottom: 32px;
  padding: 8px 0;
  transition: background 0.15s ease-in-out;
  width: 100%;

  & svg {
    margin-right: 12px;
  }

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`}`

export const FileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StatusIconStyled = styled(StatusIcon)<StatusIconProps>`${({ status }) => css`
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: ${status === 'saving' ? -5 : 0}px;
  transform: translateY(-50%);
`}`

export const RemoveButton = styled(DefaultButton)`
  background: transparent;
  border: 0;
  display: none;
  margin: 0 0 0 auto;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
`

export const RemoveIcon = styled(icon.Plus)`
  margin: 0;
  transform: rotate(45deg);
`

type FileItemLinkProps = {
  active: boolean
}

export const FileItemLink = styled.a<FileItemLinkProps>`${({ theme, active }) => css`
  background: url("${active ? icon.FileActiveUrl : icon.FileUrl}") 10px calc(50% - 2px) no-repeat;
  align-items: center;
  border-radius: 4px;
  color: ${theme.colors.white};
  display: flex;
  font-size: 1.6rem;
  margin-bottom: 4px;
  padding: 8px 32px;
  padding-left: 50px;
  text-decoration: none;

  ${active && css`
    background-color: ${theme.colors.lightBlack};
  `}
`}`

export const FileListItem = styled.li`${({ theme }) => css`
  position: relative;

  &:hover {
    ${RemoveButton} {
      display: block;
    }

    ${FileItemLink} {
      background-color: ${theme.colors.lightBlack};
    }
  }
`}`
