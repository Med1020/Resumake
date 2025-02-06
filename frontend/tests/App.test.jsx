import { Navigate } from 'react-router-dom'
import {describe, expect, test} from 'vitest'

const navigate = Navigate()

describe('Router',()=>{
    test('/ should direct to home page',()=>{
        navigate("/")
        expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
    })
})